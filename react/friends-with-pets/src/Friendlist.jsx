import React from 'react'
import Friend from  './Friend'


export default function Friendlist(){
    const friendsAndPets = [
        {
          id: 1,
          name: "Ben",
          age: 29,
          pets: [
            {
              name: "Spot",
              breed: "tabby"
            },
            {
              name: "John Johnson",
              breed: "husky"
            },
            {
              name: "Bear the bear",
              breed: "Grizzly"
            }
          ]
        },
        {
          id: 2,
          name: "Bob",
          age: 31,
          pets: [
            {
              name: "Sally",
              breed: "Australian Shepard"
            }
          ]
        },
        {
          id: 3,
          name: "Marcus",
          age: 25,
          pets: [
            {
              name: "Indy",
              breed: "Akita"
            },
            {
              name: "Anna",
              breed: "persian cat"
            }
          ]
        },
        {
          id: 4,
          name: "Jacob",
          age: 20,
          pets: [
            {
              name: "Fluffy",
              breed: "sphynx cat"
            },
            {
              name: "Patches",
              breed: "sphynx cat"
            },
            {
              name: "Tiger",
              breed: "sphynx cat"
            },
            {
              name: "Oscar",
              breed: "sphynx cat"
            }
          ]
        }
      ]
      
    const posts = friendsAndPets.map(person => {
        return (
                <Friend
                    key ={person.id}
                    {...person}    
                />
        )
    })

    return (
        <div className="fullCard">
            {posts}
        </div>
    )
}