"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./Rooms.module.css";

const filters = ["All Categories", "Hotel Apartments", "Short Lets"];

const rooms = [
  {
    name: "Deluxe 1 Bedroom",
    price: "NGN 50,000",
    image: "/images/deluxe.png",
    tag: "Popular",
    amenities: ["Wifi", "AC", "TV", "Room Service"],
  },
  {
    name: "Executive Bedroom",
    price: "NGN 60,000",
    image: "/images/executive.png",
    tag: "Premium",
    amenities: ["Wifi", "Gym", "TV", "Minibar"],
  },
  {
    name: "2 Bedroom Shortlet",
    price: "NGN 150,000",
    image: "/images/shortlet.png",
    tag: "Shortlet",
    amenities: ["Wifi", "Kitchen", "Parking", "Laundry"],
  },
];

const amenityIcons: Record<string, string> = {
  Wifi: "📶",
  AC: "❄️",
  TV: "📺",
  "Room Service": "🛎️",
  Gym: "💪",
  Minibar: "🍸",
  Kitchen: "🍳",
  Parking: "🅿️",
  Laundry: "👕",
};

export default function Rooms() {
  const [activeFilter, setActiveFilter] = useState(0);

  return (
    <section id="rooms" className={styles.rooms}>
      <div className={styles.roomsInner}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Hotels/Shortlets</h2>
          <div className={styles.filters}>
            {filters.map((f, i) => (
              <button
                key={f}
                className={
                  i === activeFilter ? styles.filterBtnActive : styles.filterBtn
                }
                onClick={() => setActiveFilter(i)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {rooms.map((room) => (
            <div key={room.name} className={styles.card}>
              <div className={styles.cardImage}>
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <span className={styles.cardTag}>{room.tag}</span>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardName}>{room.name}</h3>
                <div className={styles.cardPrice}>
                  <span className={styles.priceAmount}>{room.price}</span>
                  <span className={styles.priceUnit}>/ Night</span>
                </div>
                <div className={styles.cardAmenities}>
                  {room.amenities.map((a) => (
                    <span key={a} className={styles.amenity}>
                      <span className={styles.amenityIcon}>
                        {amenityIcons[a] || "✓"}
                      </span>
                      {a}
                    </span>
                  ))}
                </div>
                <button className={styles.cardBtn}>Book Reservation</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
