/* Artisans_List.jsx */

import Breadcrumb from "../components/ui/Breadcrumb";
import Dropdown from "../components/ui/Dropdown";
import SearchBar from "../components/ui/SearchBar";
import { useSearchParams } from "react-router-dom";
import Artisans from "../components/features/Artisans";

function Artisans_List() {
  // Récupère la catégorie sélectionnée dans les paramètres URL
  const [searchParams, setSearchParams] = useSearchParams();

  // Permet de mettre à jour la catégorie dans les paramètre URL
  const selectedCategory = searchParams.get("category");

  // Gère la sélection d'une catégorie dans le dropdown
  const handleCategoryChange = (option) => {
    setSearchParams({ category: option.value });
  };

  // Récupère la query de recherche dans les paramètres URL
  const searchQuery = searchParams.get("search") || "";

  // Gère la mise à jour de la query de recherche dans les paramètres URL
  const handleSearchChange = (value) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);

      if (value) {
        params.set("search", value);
      } else {
        params.delete("search");
      }

      return params.toString();
    })
  }

  const items = [
    { label: "Accueil", path: "/" },
    { label: "Bâtiment", path: "/artisan?category=1" },
    { label: "Plombier" },
  ];

  const dropdownOptions = [
    { label: "Bâtiment", value: 1 },
    { label: "Services", value: 2 },
    { label: "Fabrication", value: 3 },
    { label: "Alimentation", value: 4 },
  ];

  const artisans = [
    {
      id: 1,
      name: "Jean Dupont",
      rating: 4.5,
      specialty: "Plombier",
      city: "Lyon",
      image: "",
      categoryId: 1,
    },
    {
      id: 2,
      name: "Gabriel Henry",
      rating: 4.2,
      specialty: "Chauffagiste",
      city: "Lyon",
      image: "",
      categoryId: 1,
    },
    {
      id: 3,
      name: "Marie Martin",
      rating: 4.8,
      specialty: "Coiffeuse",
      city: "Lyon",
      image: "",
      categoryId: 2,
    },
  ]

  // Trouve l'option sélectionnée pour afficher son label dans le trigger du dropdown
  const selectedOption = dropdownOptions.find(
    (option) => option.value.toString() === selectedCategory,
  );

  return (
    <div className="artisans-list">
      <div className="container">
        <h1 className="visually-hidden">Liste des artisans</h1>
        <Breadcrumb items={items} />

        <div className="artisans-list__grid">
          <section className="section section--with-bg artisans-list__controls">
            <SearchBar
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <Dropdown
              options={dropdownOptions}
              label={selectedOption?.label || "Catégories"}
              onChange={handleCategoryChange}
              value={Number(selectedCategory)}
            />
          </section>

          <section className="section layout-col--end flow-md artisans-list__results">
            <h2 className="heading-lg heading-lg__accent heading-lg__accent--primary">
              {selectedOption?.label || "Tous les artisans"}
            </h2>
            <Artisans
              artisans={artisans}
              category={selectedCategory}
              search={searchQuery}
              loading={false}
              error={null}
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Artisans_List;
