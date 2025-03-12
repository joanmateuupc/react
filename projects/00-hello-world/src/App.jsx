import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'


const users = [
    {
        userName: 'OsoPanda',
        name: 'Oso Panda',
        isFollowing: true
    },
    {
        userName: 'PolarBear',
        name: 'Polar Bear',
        isFollowing: false
    },
    {
        userName: 'Koala',
        name: 'Koala',
        isFollowing: true
    }
]
export function App(){
    return (
        <>
            {users.map((user) => {
                return (
                    <TwitterFollowCard
                        key={user.userName}
                        userName={user.userName}
                        name={user.name}
                        initialIsFollowing={user.isFollowing}
                    />
                )
            }
            )}
        </>
    )
}