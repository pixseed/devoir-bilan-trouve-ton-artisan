import Breadcrumb from "../../ui/navigation/Breadcrumb";
import BreadcrumbSkeleton from "../../ui/feedback/BreadcrumbSkeleton";

export default function BreadcrumbWithStates({
  items,
  loading,
  error,
}) {
  if (loading) {
    return <BreadcrumbSkeleton />;
  }

  if (error) {
    return (
      <Breadcrumb
        items={[
          { label: "Accueil", path: "/" },
        ]}
      />
    );
  }

  return <Breadcrumb items={items} />;
}