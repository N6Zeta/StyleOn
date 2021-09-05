import "./ServicesAndSalons.css";
import { useState, useEffect } from "react";
import HeroComponent from "../../components/HeroComponent/HeroComponent";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits, Index } from "react-instantsearch-dom";

// import { services } from '../../serviceData'
import { useDispatch } from "react-redux";
import { fetchServices } from "../../redux/appdata/appdata.actions";
import CollectionContainer from "../../components/CollectionContainer/CollectionContainer";
import SalonCard from "../../components/SalonCard/SalonCard";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

export default function ServicesAndSalons() {
  const dispatch = useDispatch();

  const searchClient = algoliasearch(
    "E6A0E7IL4I",
    "3664c02b57a55b7a29c8830f52bd9d9c"
  );

  //   function filteredItems(e) {
  //     let search = e.target.value.toLowerCase();
  //     setSearchValue(search);
  //     setFilteredServices(
  //       services.filter(
  //         (service) =>
  //           service.name.toLowerCase().includes(search) ||
  //           service.description.toLowerCase().includes(search)
  //       )
  //     );

  //     setFilteredSalons(
  //       salons.filter(
  //         (salon) =>
  //           salon.name.toLowerCase().includes(search) ||
  //           salon.description.toLowerCase().includes(search)
  //       )
  //     );
  //   }

  useEffect(() => {
    dispatch(fetchServices());
  }, []);

  return (
    <div className="services-and-salons-main">
      <InstantSearch indexName="Grooming_service" searchClient={searchClient}>
        <HeroComponent
          imageUrl="https://wallpaperaccess.com/full/1190372.jpg"
          title="Best In Market !!"
        >
          {/* <input
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          type="text"
          placeholder="Search Here . . ."
        /> */}

          <SearchBox />
        </HeroComponent>
        <Index indexName="Grooming_service">
          <h2>Services</h2>
          <div className="items-grid">
            <Hits hitComponent={ServiceCard} />
          </div>
        </Index>

        <Index indexName="Salon">
          <h2>Salons</h2>
          <div className="items-grid">
            <Hits hitComponent={SalonCard} />
          </div>
        </Index>
      </InstantSearch>
    </div>
  );
}
