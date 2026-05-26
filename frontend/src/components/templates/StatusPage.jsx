/**
 * ================================================================================================
 * STATUS PAGE
 * ================================================================================================
 * Rôle :
 * - Afficher un template réutilisable pour les pages de statut.
 * - Gérer les contenus optionnels (media, copyright, modal).
 * - Gérer l'ouverture / fermeture d'une modale de contenu complémentaire.
 * ================================================================================================
 */

import { useState } from "react";
import { useBreadcrumb } from "../../hooks/features/useBreadcrumb";

import Breadcrumb from "../ui/navigation/Breadcrumb";
import Button from "../ui/actions/Button";
import Modal from "../ui/overlay/Modal";

import TranscriptionIcon from "../../assets/icons/Transcription.svg?react";
import ArrowIcon from "../../assets/icons/Right_Arrow.svg?react";
import { VARIANTS } from "../../constants/variants";

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
  const items = breadcrumbItems ?? defaultItems;

  // Gestion d'état de la modale
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container">
      {/* ===============================================================
        BREADCRUMB
      =================================================================== */}
      <Breadcrumb items={items} />

      {/* ===============================================================
        PAGE CONTENT
      =================================================================== */}
      <section
        aria-labelledby="status-title"
        className="section status-page flow-md"
      >
        <div className="status-page__content">
          {/* ===============================================================
            HEADER
          =================================================================== */}
          <div className="status-page__header">
            {title && (
              <h1
                id="status-title"
                className="status-page__header-title heading-xl"
              >
                {title}
              </h1>
            )}

            {description && (
              <p className="status-page__header-description">{description}</p>
            )}
          </div>

          {/* ===============================================================
            MEDIA BLOCK
          =================================================================== */}
          {(media || copyright || modalContent) && (
            <div className="status-page__media">
              {/* MEDIA CONTENT */}
              {media && (
                <div className="status-page__media-wrapper">{media}</div>
              )}

              {/* MEDIA FOOTER */}
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
                      variant={VARIANTS.BUTTON.TERTIARY}
                      size={VARIANTS.SIZE.XS}
                    >
                      Afficher la transcription
                    </Button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* ===============================================================
          ACTIONS
        =================================================================== */}
        <Button
          to="/"
          icon={ArrowIcon}
          variant={VARIANTS.BUTTON.PRIMARY}
          className="status-page__button"
        >
          Retourner à la page d'accueil
        </Button>

        {/* ===============================================================
          MODAL
        =================================================================== */}
        {isModalOpen && (
          <Modal
            ariaLabel="Transcription"
            onClose={() => setIsModalOpen(false)}
          >
            {modalContent}
          </Modal>
        )}
      </section>
    </div>
  );
}
