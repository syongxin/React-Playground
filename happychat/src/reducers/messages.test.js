import messages from './messages'
import * as types from '../constants/ActionTypes'

describe('Messages reducer', () => {
    it('should return the initial state, empty', () => {
        expect(messages(undefined, {})).toEqual([])
    })

    it('should handle ADD_MESSAGE and store every message', () => {
        expect(
            messages([], {
                type: types.ADD_MESSAGE,
                message: 'Hey',
                sender: 'Me'
            })
        ).toEqual([
            {
                message: 'Hey',
                sender: 'Me'
            }
        ])

        expect(
            messages(
                [
                    {
                        message: 'Hey',
                        sender: 'Me'
                    }
                ],
                {
                    type: types.ADD_MESSAGE,
                    message: 'Hey again',
                    sender: 'Me again'
                }
            )
        ).toEqual([
            {
                message: 'Hey',
                sender: 'Me'
            },
            {
                message: 'Hey again',
                sender: 'Me again'
            }
        ])
    })
})