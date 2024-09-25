import { auth } from '@/auth';
import { fetchOrCreateUser, getQuotesByAuthorId } from '@/lib/data';

export default async function DashboardPage() {
  const session = await auth();
  const user = await fetchOrCreateUser(
    session?.user?.email ?? '',
    session?.user?.name ?? '',
  );
  const quotes = await getQuotesByAuthorId(user.id);
  return (
    <section>
      <div className='mt-5'>
        <h2 className='text-lg font-semibold'>Your Profile</h2>
        <p>{user.name}</p>
        <p className='font-mono'>{user.email}</p>
        <p className='text-sm'>Member Since {user.createdAt.toDateString()}</p>
      </div>

      <div className='mt-5'>
        <h2 className='text-lg font-semibold'>Your Quotes</h2>
        <ul>
          {quotes.map((v) => {
            return (
              <div key={v.id}>
                <p>{v.content}</p>
                <p>#{v.id}</p>
                <p>{v.createdAt.toLocaleDateString()}</p>
              </div>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
