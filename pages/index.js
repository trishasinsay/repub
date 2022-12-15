import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { useState, useEffect } from "react";

export default function Home() {
  //
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  //
  useEffect(() => {
    setLoading(true);
    fetch("https://repub-aeej.vercel.app/")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
}
