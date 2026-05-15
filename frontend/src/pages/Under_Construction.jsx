import StatusPage from "../components/features/StatusPage";

function Under_Construction() {
  return (
    <StatusPage
      title="En cours de construction"
      description="Cette page sera bientôt disponible."
      media={
        <img src="/images/UNDER-CONSTRUCTION.jpg" alt="Cette page est en cours de construction et sera bientôt disponible."></img>
      }
      transcription
    />
  );
}

export default Under_Construction;