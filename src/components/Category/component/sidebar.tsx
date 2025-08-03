import Image from "next/image"
import Link from "next/link"
import { TrendingUp } from "lucide-react"
import { Title } from "@/components/MV/Title"
import { fetchProductsCategory } from "@/sevices/products/productsSevices"

const CategoryProductSidebar = async () => {
  const { data, error } = await fetchProductsCategory()

  if (error) {
    return (
      <div className="bg-gradient-to-l from-[#1c1c22] to-[#2c2c34] rounded-xl p-4">
        <div className="text-red-400 p-4 text-center">An error occurred: {error}</div>
      </div>
    )
  }

  if (!data || data.length === 0) {
    return (
      <div className="bg-gradient-to-l from-[#1c1c22] to-[#2c2c34] rounded-xl p-4">
        <div className="text-gray-400 p-4 text-center">No data available</div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-l from-[#1c1c22] to-[#2c2c34] rounded-xl p-4 shadow-lg sticky top-24">
      <Title icon={<TrendingUp size={20} className="text-yellow-500" />} className="mb-4">
        Xem nhiều
      </Title>

      <div className="space-y-1">
        {data.map((item:any, index:number) => {
          // Handle potential object values
          const safeTime = typeof item.time === "object" ? JSON.stringify(item.time) : item.time
          const safeSumSeri = typeof item.sumSeri === "object" ? JSON.stringify(item.sumSeri) : item.sumSeri
          const safeQuality = typeof item.quality === "object" ? JSON.stringify(item.quality) : item.quality

          return (
            <div key={index} className="group">
              <Link
                href={`/q/${item.slug}`}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
                prefetch={false}
              >
                <div className="relative w-16 h-20 overflow-hidden rounded-lg flex-shrink-0">
                  <Image
                    src={item.linkImg || "/placeholder.svg?height=80&width=60"}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 60px, 80px"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-gray-100 mb-1 line-clamp-2 group-hover:text-yellow-400 transition-colors duration-300">
                    {item.name}
                  </h3>
                  <div className="flex flex-wrap items-center gap-1 text-xs text-gray-400">
                    {safeSumSeri && (
                      <>
                        <span className="text-gray-300">T: {safeSumSeri}</span>
                        <span className="text-gray-600">•</span>
                      </>
                    )}
                    {safeQuality && (
                      <>
                        <span>{safeQuality}</span>
                        <span className="text-gray-600">•</span>
                      </>
                    )}
                    <span>Tập {safeTime}</span>
                  </div>
                </div>
              </Link>
              {index < data.length - 1 && <div className="border-t border-gray-800/70 mx-3"></div>}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CategoryProductSidebar
