import React from "react";
import styles from "./track.module.css";

export default function Track({
  track,
  onTrackAdd,
  listType,
  clickDisabled,
  onTrackPlay,
}) {
  const handleTrackAdd = (event) => {
    event.stopPropagation();
    console.log("track clicked");
    onTrackAdd(track);
  };
  const handleTrackPlay = (event) => {
    event.stopPropagation();
    console.log("track play clicked");
    onTrackPlay(track);
  };
  return (
    <li className={styles.track}>
      <div className={styles.elementsContainer}>
        <div className={styles.textContainer}>
          <p className={styles.trackName}>
            {track.name} ({track.type})
          </p>
          <p>
            {track.album.name} |{" "}
            {track.artists.map((artist) => artist.name).join(", ")}
          </p>
        </div>
        {listType === "searchResults" ? (
          <p
            className={styles.Button}
            onClick={(event) => {
              handleTrackAdd(event);
            }}
            style={{ fontSize: "1.2em" }}
            title="add to liked songs"
          >
            +
          </p>
        ) : (
          <p
            className={`${styles.Button} ${
              clickDisabled ? styles.disabled : ""
            }`}
            style={{ fontSize: "1.8rem" }}
            onClick={(event) => {
              handleTrackClick(event);
            }}
          >
            -
          </p>
        )}
        <p
          className={`${styles.Button}`}
          style={{ fontSize: "1rem" }}
          onClick={(event) => {
            handleTrackPlay(event);
          }}
        >
          ▷
        </p>
      </div>
    </li>
  );
}
