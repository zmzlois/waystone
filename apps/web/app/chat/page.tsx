import { withAuth, signOut } from "@workos-inc/authkit-nextjs"
import { ChatLayout } from "@/components/chat/chat-layout"

export default async function ChatPage() {
  const { user } = await withAuth({ ensureSignedIn: true })

  return (
    <ChatLayout
      user={{
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        profilePictureUrl: user.profilePictureUrl,
      }}
      signOut={async () => {
        "use server"
        await signOut()
      }}
    />
  )
}
