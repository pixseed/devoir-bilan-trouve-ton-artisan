/* categoryService.js */

export async function getAllCategories() {
    const res = await fetch("http://localhost:3000/categories");

    if(!res.ok) {
        switch (res.status) {
            case 404: throw new Error("Ressource introuvable");
            case 500: throw new Error("Erreur serveur");
            default: throw new Error(`Erreur API : ${res.status}`);
        }
    }

    const json = await res.json();
    return json.data;
}