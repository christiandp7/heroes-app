import { mount } from 'enzyme/build'
import { AuthContext } from '../../auth/AuthContext'
import { MemoryRouter } from 'react-router-dom'
import DashboardRoutes from '../../routers/DashboardRoutes'

describe('<DashboardRoutes /> test', () => {
	const contextValue = {
		dispatch: jest.fn(),
		user: { logged: true, name: 'Juan' },
	}
	test('should be shown correctly', () => {
		const wrapper = mount(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter>
					<DashboardRoutes />
				</MemoryRouter>
			</AuthContext.Provider>,
		)
		expect(wrapper).toMatchSnapshot()
		expect(wrapper.find('.text-info').text().trim()).toBe('Juan')
	})
})
