import { Meteor } from 'meteor/meteor'
import expect from 'expect'

import { validateNewUser } from './users'

if(Meteor.isServer) {
    describe('users', function() {
        it('should allow valid email', function() {
            const testUser = {
                emails: [
                    {
                        address: 'test@example.com'
                    }
                ]
            }

            const res = validateNewUser(testUser)

            expect(res).toBe(true)
        })

        it('should reject invalid email', function() {
            const testUser = {
                emails: [
                    {
                        address: 'test'
                    }
                ]
            }
            
            expect(() => {
                validateNewUser(testUser)
            }).toThrow()
        })
    })
}

// const add = (a, b) => {
//     if(typeof(b) !== 'number') {
//         return a+a
//     }

//     return a+b
// }

// const square = (a) => a*a

// // Group test
// describe('add', function() {
//     it('should add two numbers', function() {
//         const result = add(11, 9)

//         expect(result).toBe(20)
        
//         // if(result !== 20) {
//         //     throw new Error('Sum was not equal.')
//         // }
//     })

//     it('should double a single number', function() {
//         const result = add(44)

//         expect(result).toBe(88)
//     })
// })

// describe('square', function() {
//     it('should square a number', function() {
//         const result = square(3)

//         expect(result).toBe(9)
//     })
// })

