import StatusPage from "../components/templates/StatusPage";

function Under_Construction() {
  return (
    <StatusPage
      title="En cours de construction"
      description="Cette page sera bientôt disponible."
      media={
        <img
          src="/images/UNDER-CONSTRUCTION.jpg"
          alt="Cette page est actuellement en cours de construction et sera bientôt disponible."
        ></img>
      }
      modalContent={
        <>
          <p>
            Cette page est actuellement en cours de construction et sera bientôt
            disponible.
          </p>
        </>
      }
    />
  );
}

export default Under_Construction;
