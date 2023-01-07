import {User} from '@/models/User'

const UserCard = ({ user }: { user: User }) => {
    return (
        <div className="flex gap-4 rounded-md border border-slate-300
                        bg-white shadow-lg shadow-indigo-400/10 p-3 hover:scale-105 transition ease-in-out
                        dark:bg-gray-600">
            <div className="flex shrink-0 justify-center items-center rounded-full border border-pink-500 w-12 h-12">
                <span className="text-2xl">{user.emoji}</span>
            </div>
            <div>
                <div className="font-medium">{user.name}</div>
                <div className="truncate">{user.old}</div>
                <div className="font-light">{user.greeting()}</div>
            </div>
        </div>
    )
};

export default UserCard;
