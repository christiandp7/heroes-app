import { mount } from 'enzyme/build'
import AppRouter from '../../routers/AppRouter'
import { AuthContext } from '../../auth/AuthContext'
// import { authReducer } from '../auth/authReducer'

describe('<AppRouter /> test', () => {
	test('should show login if isnt authenticated', () => {
		const contextValue = {
			dispatch: jest.fn(),
			user: { logged: false },
		}
		const wrapper = mount(
			<AuthContext.Provider value={contextValue}>
				<AppRouter />
			</AuthContext.Provider>,
		)
		// console.log(wrapper.html())
		expect(wrapper).toMatchSnapshot()
	})

	test('should show <MarvelScreen /> if is authenticated', () => {
		const contextValue = {
			dispatch: jest.fn(),
			user: { logged: true, name: 'Juan' },
		}
		const wrapper = mount(
			<AuthContext.Provider value={contextValue}>
				<AppRouter />
			</AuthContext.Provider>,
		)
		// console.log(wrapper.html())
		// expect(wrapper).toMatchSnapshot()
		expect(wrapper.find('.navbar').exists()).toBe(true)
	})
})
