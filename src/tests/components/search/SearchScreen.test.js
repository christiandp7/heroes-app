import { mount } from 'enzyme'
import { MemoryRouter, Route } from 'react-router-dom'
import SearchScreen from '../../../components/search/SearchScreen'

describe('<SearchScreen /> test', () => {
	test('should be shown with right values', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/search']}>
				<Route path="/search" component={SearchScreen} />
			</MemoryRouter>,
		)
		expect(wrapper).toMatchSnapshot()
		expect(wrapper.find('.alert-info').text().trim()).toBe('Search a Hero')
	})

	test('should show Batman and the input with the same queryString value', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/search?q=batman']}>
				<Route path="/search" component={SearchScreen} />
			</MemoryRouter>,
		)

		expect(wrapper.find('input').prop('value')).toBe('batman')
		expect(wrapper).toMatchSnapshot()
	})

	test('should show a error message if Hero does not exists', () => {
		// dsd
		const wrapper = mount(
			<MemoryRouter initialEntries={['/search?q=nohero']}>
				<Route path="/search" component={SearchScreen} />
			</MemoryRouter>,
		)

		expect(wrapper.find('.alert-danger').exists()).toBe(true)
		expect(wrapper).toMatchSnapshot()
	})

	test('should call PUSH from history', () => {
		const history = {
			push: jest.fn(),
		}
		const wrapper = mount(
			<MemoryRouter initialEntries={['/search?q=nohero']}>
				<Route
					path="/search"
					component={() => <SearchScreen history={history} />}
				/>
			</MemoryRouter>,
		)

		wrapper.find('input').simulate('change', {
			target: {
				name: 'searchText',
				value: 'batman',
			},
		})

		wrapper.find('form').prop('onSubmit')({ preventDefault() {} })

		expect(history.push).toHaveBeenCalledWith(`?q=batman`)
	})
})
