/* StatusPage.jsx */

import Breadcrumb from "../ui/Breadcrumb";
import { useBreadcrumb } from "../../hooks/useBreadcrumb";
import Button from "../ui/Button";
import TranscriptionIcon from "../../assets/icons/Transcription.svg?react";
import ArrowIcon from "../../assets/icons/Right_Arrow.svg?react";
import Modal from "../ui/Modal";
import { useState } from "react";

export default function StatusPage({
  title = "",
  description = "",
  media = null,
  copyright = "",
  modalContent = null,
  breadcrumbItems,
}) {
  // Breadcrumb custom si fourni, sinon génération automatique via useBreadcrumb
  const defaultItems = useBreadcrumb();
  const items = breadcrumbItems || defaultItems;

  // Gestion d'état de la modale
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container">
      <Breadcrumb items={items} />
      <section className="section status-page flow-md">
        <div className="status-page__content">
          <div className="status-page__header">
            <h1 className="status-page__header-title heading-xl">{title}</h1>
            <p className="status-page__header-description">{description}</p>
          </div>
          {(media || copyright || modalContent) && (
            <div className="status-page__media">
              {media && (
                <div className="status-page__media-wrapper">{media}</div>
              )}
              {(copyright || modalContent) && (
                <div className="status-page__media-footer">
                  {copyright && (
                    <p className="status-page__media-footer-copyright">
                      {copyright}
                    </p>
                  )}
                  {modalContent && (
                    <Button
                      onClick={() => setIsModalOpen(true)}
                      icon={TranscriptionIcon}
                      variant="tertiary"
                      size="xs"
                    >
                      Afficher la transcription
                    </Button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
        <Button
          to="/"
          icon={ArrowIcon}
          variant="primary"
          className="status-page__button"
        >
          Retourner à la page d'accueil
        </Button>
        {isModalOpen && (
          <Modal onClose={() => setIsModalOpen(false)}>
            {modalContent}
          </Modal>
        )}
      </section>
    </div>
  );
}
