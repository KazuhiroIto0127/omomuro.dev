import { User } from '@/models/User';

const UserCard = ({ user }: { user: User }) => {
  return (
    <div
      className="flex gap-4 rounded-md border border-slate-300
                        bg-white p-3 shadow-lg shadow-indigo-400/10 transition ease-in-out hover:scale-105
                        dark:bg-gray-600"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-pink-500">
        <span className="text-2xl">{user.emoji}</span>
      </div>
      <div>
        <div className="font-medium">{user.name}</div>
        <div className="truncate">{user.old}</div>
        <div className="font-light">{user.greeting()}</div>
      </div>
    </div>
  );
};

export default UserCard;
