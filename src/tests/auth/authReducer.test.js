// const state = {
//   name: 'Christian',
//   logged: 'true'
// }

import { authReducer } from '../../auth/authReducer'
import { types } from '../../types/types'

describe('auth Reducer tests', () => {
	test('should return default state', () => {
		const state = authReducer({ logged: false }, {})
		expect(state).toEqual({ logged: false })
	})
	test('should auth and set user name', () => {
		const action = {
			type: types.login,
			payload: {
				name: 'Gianfranco',
			},
		}
		const state = authReducer({ logged: false }, action)
		expect(state).toEqual({ logged: true, name: 'Gianfranco' })
	})
	test('should delete user name and set logged in false', () => {
		const action = {
			type: types.logout,
		}
		const state = authReducer({ logged: true, name: 'Gianfranco' }, action)
		expect(state).toEqual({ logged: false })
	})
})
