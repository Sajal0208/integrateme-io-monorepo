import { clerkClient } from "@clerk/nextjs";
import { getAuth, buildClerkProps } from "@clerk/nextjs/server";
import { NextPage, GetServerSideProps } from "next";


interface User {
    id: string;
    firstName: string;
    lastName: string;
}

interface UserDashboardProps {
    user: User | null;
}

const UserDashboard: NextPage<UserDashboardProps> = ({ user }) => {
    if (!user) {
        return (
            <div>
                <p>Please log in to view this content.</p>
                {/* Optionally add a login button or redirect logic here */}
            </div>
        );
    }

    return (
        <div>
            <h1>Welcome, {user.firstName}!</h1>
            <p>This is your protected page.</p>
            {/* Other user-specific JSX components/data can be added here */}
        </div>
    );
};

export default UserDashboard;

export const getServerSideProps = async (ctx: any) => {
    const { userId } = getAuth(ctx.req);

    if (!userId) {
        return { props: {} }; // This will pass an empty props object and the component will handle the "not logged in" state
    }

    const userFromClerk = userId ? await clerkClient.users.getUser(userId) : null;
    const user = userFromClerk
        ? {
            id: userFromClerk.id,
            firstName: userFromClerk.firstName,
            lastName: userFromClerk.lastName,
        }
        : null;

    return { props: { user, ...buildClerkProps(ctx.req) } };
};
