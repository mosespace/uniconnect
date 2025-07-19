import { MainLayout } from "@/components/main-layout"
import { TopStudentsGrid } from "@/components/top-students-grid"
import { TopStudentsFilters } from "@/components/top-students-filters"

export default function TopStudentsPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
            🌟 Top Students
          </h1>
          <p className="text-muted-foreground text-lg">
            Discover the most talented and highly-rated students in our community
          </p>
        </div>
        <TopStudentsFilters />
        <TopStudentsGrid />
      </div>
    </MainLayout>
  )
}
