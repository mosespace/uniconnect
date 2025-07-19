import { MainLayout } from "@/components/main-layout"
import { MessagesLayout } from "@/components/messages-layout"

export default function MessagesPage() {
  return (
    <MainLayout>
      <div className="h-[calc(100vh-8rem)]">
        <MessagesLayout />
      </div>
    </MainLayout>
  )
}
