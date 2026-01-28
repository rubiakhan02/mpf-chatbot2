"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import styles from './projects.module.css';

const IMAGE_BASE_URL = 'https://apis.mypropertyfact.in/get/images/properties/';

export default function ProjectsListing() {
    const searchParams = useSearchParams();
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    const type = searchParams.get('type');
    const cityId = searchParams.get('cityId') || '2';
    const cityName = searchParams.get('cityName') || '';
    const budget = searchParams.get('budget') || '';

    useEffect(() => {
        const fetchProjects = async () => {
            if (!type || !budget) {
                setLoading(false);
                return;
            }

            let budgetParam = "";
            const b = budget.toLowerCase();
            if (b.includes("up to") && b.includes("1 cr")) budgetParam = "Up+to+1Cr*";
            else if (b.includes("1") && b.includes("3") && b.includes("cr")) budgetParam = "1-3+Cr*";
            else if (b.includes("3") && b.includes("5") && b.includes("cr")) budgetParam = "3-5+Cr*";
            else if (b.includes("above") && b.includes("5 cr")) budgetParam = "Above+5+Cr";

            const apiUrl = `https://apis.mypropertyfact.in/projects/search-by-type-city-budget?propertyType=${type}&propertyLocation=${cityId}&budget=${budgetParam}`;

            try {
                const res = await fetch(apiUrl);
                const results = await res.json();

                // Strict Filtering Logic (Matching the Chatbot)
                const targetType = parseInt(type);
                const targetCityLow = cityName.toLowerCase().trim();

                const filtered = (results || []).filter(p => {
                    const pType = p.propertyTypeId || p.property_type_id || (p.propertyTypeName?.toLowerCase().includes('comm') ? 2 : 1);
                    const pCityName = (p.cityName || p.city_name || "").toLowerCase();
                    const pAddress = (p.projectAddress || "").toLowerCase();

                    const matchesType = pType == targetType;
                    const matchesCity = pCityName.includes(targetCityLow) || targetCityLow.includes(pCityName) || pAddress.includes(targetCityLow);

                    return matchesType && matchesCity;
                });

                setProjects(filtered);
            } catch (err) {
                console.error("Error fetching projects:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, [type, cityId, cityName, budget]);

    if (loading) return <div className={styles.loading}>Loading projects...</div>;

    if (projects.length === 0) {
        return (
            <div className={styles.noResults}>
                <h2>Currently, we do not have any projects matching your preferences.</h2>
                <a href="/" className={styles.backBtn}>Back to Home</a>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Projects for you</h1>
                <p>Showing projects in {cityName} matching your budget: {budget}</p>
            </header>

            <div className={styles.grid}>
                {projects.map((p, i) => {
                    const slug = p.projectSlug || p.projectName.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                    const imageUrl = (p.projectThumbnailImage && p.projectThumbnailImage.startsWith('http')) ? p.projectThumbnailImage : (p.projectThumbnailImage ? `${IMAGE_BASE_URL}${slug}/${p.projectThumbnailImage}` : 'https://via.placeholder.com/300x200?text=No+Image');

                    return (
                        <div key={i} className={styles.card}>
                            <img src={imageUrl} alt={p.projectName} className={styles.image} onError={(e) => e.target.src = 'https://via.placeholder.com/300x200?text=No+Image'} />
                            <div className={styles.content}>
                                <h3>{p.projectName}</h3>
                                <p className={styles.location}>📍 {p.projectAddress || p.cityName}</p>
                                <div className={styles.details}>
                                    <span className={styles.price}>{p.projectStartingPrice || 'Price on Request'}</span>
                                    <span className={styles.status}>{p.projectStatusName}</span>
                                </div>
                                <p className={styles.builder}>By {p.builderName}</p>
                                <div className={styles.actions}>
                                    <a href={`https://mypropertyfact.in/${slug}`} target="_blank" className={`${styles.btn} ${styles.viewBtn}`}>View Details</a>
                                    <button className={`${styles.btn} ${styles.enquireBtn}`}>Enquire</button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
