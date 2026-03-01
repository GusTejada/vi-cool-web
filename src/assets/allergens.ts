export const allergens = [
  { id: "gluten", icon: "🌾", es: "Gluten", en: "Gluten" },
  { id: "crustaceans", icon: "🦞", es: "Crustáceos", en: "Crustaceans" },
  { id: "eggs", icon: "🥚", es: "Huevos", en: "Eggs" },
  { id: "fish", icon: "🐟", es: "Pescado", en: "Fish" },
  { id: "peanuts", icon: "🥜", es: "Cacahuetes", en: "Peanuts" },
  { id: "soy", icon: "🫘", es: "Soja", en: "Soy" },
  { id: "dairy", icon: "🥛", es: "Lácteos", en: "Dairy" },
  { id: "nuts", icon: "🌰", es: "Frutos de Cáscara", en: "Tree Nuts" },
  { id: "celery", icon: "🥬", es: "Apio", en: "Celery" },
  { id: "mustard", icon: "🍯", es: "Mostaza", en: "Mustard" },
  { id: "sesame", icon: "🥯", es: "Sésamo", en: "Sesame" },
  { id: "sulphites", icon: "🍷", es: "Sulfitos", en: "Sulphites" },
  { id: "lupins", icon: "🌻", es: "Altramuces", en: "Lupins" },
  { id: "molluscs", icon: "🐚", es: "Moluscos", en: "Molluscs" },
];

export function getAllergenIcon(id: string) {
  return allergens.find((a) => a.id === id)?.icon || "";
}
