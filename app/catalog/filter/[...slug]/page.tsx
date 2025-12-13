"use client";

import { useEffect } from "react";
import styles from "./CatalogPage.module.css";
import SideBarCatalog from "../@sidebar/SideBarCatalog";
import CamperCard from "@/components/CamperCard/CamperCard";
import { useCatalogStore } from "@/lib/store/campersStore";
import Loader from "@/components/Loader/Loader";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";

export default function CatalogPage() {
  const { campers, loading, error, page, total, fetchCampers } =
    useCatalogStore();

  useEffect(() => {
    fetchCampers(1, false);
  }, [fetchCampers]);

  const handleLoadMore = () => {
    fetchCampers(page + 1, true);
  };

  const hasMore = campers.length < total;

  const handleResetFilters = () => {
    window.location.reload();
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.catalogContainer}>
        <div className={styles.catalogLayout}>
          <SideBarCatalog />
          <main className={styles.camperListMain}>
            <div className={styles.camperListWrapper}>
              {error && (
                <div className={styles.centerBox}>
                  <ErrorMessage message={error} />
                  <button
                    onClick={handleResetFilters}
                    className={styles.resetButton}
                  >
                    Reset filters
                  </button>
                </div>
              )}
              {!error && (
                <>
                  {loading && campers.length === 0 && <Loader />}
                  {campers.length > 0 && (
                    <div className={styles.camperGrid}>
                      {campers.map((camper) => (
                        <CamperCard
                          key={`${camper.id}-${camper.name}`}
                          camper={camper}
                        />
                      ))}
                    </div>
                  )}
                  {hasMore && !loading && campers.length > 0 && (
                    <div className={styles.loadMoreContainer}>
                      <button
                        onClick={handleLoadMore}
                        disabled={loading}
                        className={styles.loadMoreButton}
                      >
                        Load More
                      </button>
                    </div>
                  )}
                  {loading && campers.length > 0 && <Loader />}
                </>
              )}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}