import StatusPage from "../components/features/StatusPage";

function Not_Found() {
  return (
    <StatusPage
      title="Erreur 404"
      description="Cette page n'existe pas. Elle n'a jamais franchi la ligne d'arrivée."
      media={
        <img src="/images/ERREUR-404.jpg" alt="Cette page n'existe pas. Elle n'a jamais franchi la ligne d'arrivée."></img>
      }
      copyright="© Région Auvergne-Rhône-Alpes"
      transcription
      breadcrumbItems={[
        { label: "Accueil", path: "/" },
        { label: "Page introuvable"},
      ]}
    />
  );
}

export default Not_Found;