import { mount } from 'enzyme'
import { AuthContext } from '../../auth/AuthContext'
// import { types } from '../../types/types'
import LoginScreen from '../../components/login/LoginScreen'
import { types } from '../../types/types'

describe('<LoginScreen /> tests', () => {
	const history = {
		replace: jest.fn(),
	}
	const contextValues = {
		dispatch: jest.fn(),
	}
	const wrapper = mount(
		<AuthContext.Provider value={contextValues}>
			<LoginScreen history={history} />
		</AuthContext.Provider>,
	)
	test('should be shown correctly', () => {
		expect(wrapper).toMatchSnapshot()
	})

	test('should call dispatch and render navigation', () => {
		const handleClick = wrapper.find('button').prop('onClick')
		handleClick()

		expect(contextValues.dispatch).toHaveBeenCalledWith({
			payload: {
				name: 'Christian Diaz',
			},
			type: types.login,
		})
		expect(history.replace).toHaveBeenCalledWith('/')

		localStorage.setItem('lastPath', '/dc')
		handleClick()
		expect(history.replace).toHaveBeenCalledWith('/dc')
	})
})
