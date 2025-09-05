import { useMemo } from "react";
import { useFilterBuilder, FilterToolbar } from "@clywell/filter-toolbar";
import type { FilterDefinition, FilterQuery } from "@clywell/filter-toolbar";
import "@clywell/filter-toolbar/dist/styles.css";

interface foods {
  id: number;
  food: string;
  availability: string;
  price: number;
  img: string;
}

const foodData: foods[] = [
  {
    id: 1,
    food: "Fried Rice",
    availability: "available",
    price: 4000,
    img: "/food1.jpg",
  },
  {
    id: 2,
    food: "Coconut Rice",
    availability: "unavailable",
    price: 3000,
    img: "/food2.jpg",
  },
  {
    id: 3,
    food: "Jollof Rice",
    availability: "available",
    price: 5000,
    img: "/food3.jpg",
  },
  {
    id: 4,
    food: "Semo & Egusi soup",
    availability: "available",
    price: 5200,
    img: "/food4.jpg",
  },
  {
    id: 5,
    food: "Pounded yam & Efo Riro",
    availability: "available",
    price: 1000,
    img: "/food5.jpg",
  },
  {
    id: 6,
    food: "Yam & Egg sauce",
    availability: "unavailable",
    price: 2500,
    img: "/food6.jpg",
  },
  {
    id: 7,
    food: "Rice & Egg sauce",
    availability: "avialable",
    price: 9000,
    img: "/food7.jpg",
  },
  {
    id: 8,
    food: "Rice & Beans",
    availability: "unavailable",
    price: 3500,
    img: "/food8.jpg",
  },
  {
    id: 9,
    food: "Semo & Egusi soup",
    availability: "available",
    price: 5200,
    img: "/food4.jpg",
  },
];

function Newfoods() {
  const availableFilters: FilterDefinition[] = [
    {
      key: "food",
      type: "select",
      label: "Category",
      category: "basic",
      options: [
        { value: "Rice", label: "Rice" },
        { value: "Yam", label: "Yam" },
        { value: "Semo", label: "Semo" },
      ],
    },
    {
      key: "price",
      type: "number-range",
      label: "Price Range",
      category: "numbers",
    },
    {
      key: "availability",
      type: "select",
      options: [
        { value: "available", label: "Yes" },
        { value: "unavailable", label: "No" },
      ],
      label: "Available",
      category: "basic",
    },
  ];

  const {
    activeFilters,
    addFilter,
    updateFilter,
    removeFilter,
    clearFilters,
    hasActiveFilters,
    query,
  } = useFilterBuilder({
    availableFilters,
    onQueryChange: (newQuery: FilterQuery) => {
      console.log("Query changed: " + JSON.stringify(newQuery));
    },
  });

  const foodDatas = useMemo(() => {
    return foodData.filter((eachFood) => {
      console.log("Query changed: " + JSON.stringify(query));
      // Availability filter
      if (query.availability && eachFood.availability !== query.availability) {
        return false;
      }

      // Food filter
      if (query.food && typeof query.food === "string") {
        if (!eachFood.food.toLowerCase().includes(query.food.toLowerCase())) {
          return false;
        }
      }

      // Food Price filter
      if (
        query.price_min
      ) {
        const minPrice = Number(query.price_min)
        if (eachFood.price < minPrice)
            return false
      }

      if (
        query.price_max
      ){
        const maxPrice = Number(query.price_max)
        if (eachFood.price > maxPrice)
            return false
      }

      return true;


    });
  }, [query]);

  return (
    <div className="px-10 py-5 w-full ">
      <div>
        <div>
          <h1 className=" text-4xl font-bold py-4 text-center">
            My Food Items
          </h1>
          <p className="text-center text-lg">
            When hunger calls, we deliver. Enjoy hot, fresh, and mouthwatering
            dishes without leaving your seat.
          </p>
          <FilterToolbar
            availableFilters={availableFilters}
            activeFilters={activeFilters}
            onAddFilter={addFilter}
            onUpdateFilter={updateFilter}
            onRemoveFilter={removeFilter}
            onClearAll={clearFilters}
            hasActiveFilters={hasActiveFilters}
          />
        </div>
      </div>
      <div className="results-section py-5">
        <h2 className="py-2">
          Results ({foodDatas.length} of {foodData.length})
        </h2>

        {foodDatas.length === 0 ? (
          <p className="no-results">
            No results found. Try adjusting your filters.
          </p>
        ) : (
          <div className=" grid md:grid-cols-3 grid-cols-1 gap-10 text-center items-center ">
            {foodDatas.map((eachFood, id) => (
              <div key={id} className="p-5 border border-gray-900 rounded-2xl ">
                <img
                  src={eachFood.img}
                  className="w-[40] rounded-xl opacity-100 hover:opacity-90"
                />
                <div className="flex flex-col">
                  <p className="text-xl font-semibold">{eachFood.food}</p>
                  <p>{eachFood.availability}</p>
                  <p>
                    Price:{" "}
                    <span className="text-sm font-medium">
                      {eachFood.price}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Newfoods;
