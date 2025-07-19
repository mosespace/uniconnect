import { MainLayout } from "@/components/main-layout"
import { MarketplaceGrid } from "@/components/marketplace-grid"
import { MarketplaceFilters } from "@/components/marketplace-filters"

export default function MarketplacePage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold">Student Marketplace</h1>
          <p className="text-muted-foreground">Buy, sell, and trade with fellow students</p>
        </div>
        <MarketplaceFilters />
        <MarketplaceGrid />
      </div>
    </MainLayout>
  )
}
