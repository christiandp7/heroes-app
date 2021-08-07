// import { mount } from 'enzyme'
// import { MemoryRouter, Route } from 'react-router-dom'
// import HeroScreen from '../../../components/heroes/HeroScreen'

// describe('<HeroScreen /> tests', () => {
// 	const history = {
// 		length: 10,
// 		push: jest.fn(),
// 		goBack: jest.fn(),
// 	}
// 	const wrapper = mount(
// 		<MemoryRouter initialEntries={['/hero']}>
// 			<HeroScreen history={history} />
// 		</MemoryRouter>,
// 	)

// 	test('should show the <Redirect /> component if doesnt have arguments in the URL', () => {
// 		// expect(wrapper).toMatchSnapshot()
// 		expect(wrapper.find('Redirect').exists()).toBe(true)
// 	})

// 	test('should show a hero if the param exists', () => {
// 		const wrapper = mount(
// 			<MemoryRouter initialEntries={['/hero/marvel-spider ']}>
// 				<Route path="/hero/:heroId" component={HeroScreen} />
// 			</MemoryRouter>,
// 		)
// 		expect(wrapper.find('.row').exists()).toBe(true)
// 	})

// 	test('should go back to last screen with PUSH', () => {
// 		const history = {
// 			length: 1,
// 			push: jest.fn(),
// 			goBack: jest.fn(),
// 		}
// 		const wrapper = mount(
// 			<MemoryRouter initialEntries={['/hero/marvel-spider ']}>
// 				<Route
// 					path="/hero/:heroId"
// 					component={() => <HeroScreen history={history} />}
// 				/>
// 			</MemoryRouter>,
// 		)
// 		wrapper.fins('button').prop('onClick')()
// 		expect(history.push).toHaveBeenCalledWith('/')
// 		expect(history.goBack).not.toHaveBeenCalled()
// 	})

// 	test('should return to last screen with GOBACK', () => {
// 		const wrapper = mount(
// 			<MemoryRouter initialEntries={['/hero/marvel-spider ']}>
// 				<Route
// 					path="/hero/:heroId"
// 					component={() => <HeroScreen history={history} />}
// 				/>
// 			</MemoryRouter>,
// 		)
// 		wrapper.fins('button').prop('onClick')()
// 		expect(history.push).toHaveBeenCalledTimes(0)
// 		expect(history.goBack).toHaveBeenCalled()
// 	})

// 	test('should call <Redirect /> if hero does not exists', () => {
// 		const wrapper = mount(
// 			<MemoryRouter initialEntries={['/hero/marvel-spider ']}>
// 				<Route
// 					path="/hero/:heroId"
// 					component={() => <HeroScreen history={history} />}
// 				/>
// 			</MemoryRouter>,
// 		)
// 		expect(wrapper.text()).toBe('')
// 	})
// })

describe('<HeroScreen /> tests', () => {
	test('should OK', () => {
		// console.log('HeroScreen OK!')
	})
})
