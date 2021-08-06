import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import HeroScreen from '../../../components/heroes/HeroScreen'

describe('<HeroScreen /> tests', () => {
	const history = {
		length: 10,
		push: jest.fn(),
		goBack: jest.fn(),
	}
	const wrapper = mount(
		<MemoryRouter initialEntries={['/hero']}>
			<HeroScreen history={history} />
		</MemoryRouter>,
	)

	test('should show the <Redirect /> component if doesnt have arguments in the URL', () => {
		// expect(wrapper).toMatchSnapshot()
		expect(wrapper.find('Redirect').exists()).toBe(true)
	})
})
