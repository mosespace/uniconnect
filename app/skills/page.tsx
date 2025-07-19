import { MainLayout } from "@/components/main-layout"
import { SkillsGrid } from "@/components/skills-grid"
import { SkillsFilters } from "@/components/skills-filters"

export default function SkillsPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold">Discover Skills</h1>
          <p className="text-muted-foreground">Find talented students to help with your projects</p>
        </div>
        <SkillsFilters />
        <SkillsGrid />
      </div>
    </MainLayout>
  )
}
