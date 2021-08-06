import { mount } from 'enzyme'
import { Router, MemoryRouter } from 'react-router-dom'
import { AuthContext } from '../../../auth/AuthContext'
import Navbar from '../../../components/ui/Navbar'
import { types } from '../../../types/types'

describe('<Navbar /> tests', () => {
	const historyMock = {
		push: jest.fn(),
		replace: jest.fn(),
		location: {},
		listen: jest.fn(),
		createHref: jest.fn(),
	}
	const contextValue = {
		dispatch: jest.fn(),
		user: {
			logged: true,
			name: 'Juan',
		},
	}
	const wrapper = mount(
		<AuthContext.Provider value={contextValue}>
			<MemoryRouter>
				<Router history={historyMock}>
					<Navbar />
				</Router>
			</MemoryRouter>
		</AuthContext.Provider>,
	)

	afterEach(() => {
		jest.clearAllMocks()
	})

	test('should be shown correctly', () => {
		expect(wrapper).toMatchSnapshot()
		expect(wrapper.find('.text-info').text().trim()).toBe('Juan')
	})
	test('should call logout and use history', () => {
		wrapper.find('button').prop('onClick')()
		expect(contextValue.dispatch).toHaveBeenCalledWith({
			type: types.logout,
		})
		expect(historyMock.replace).toHaveBeenCalledWith('/login')
	})
})
