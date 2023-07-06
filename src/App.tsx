import React, { useEffect, useState } from "react";
import "./App.css";

interface DataGridProps {
  endpoint: string;
}
interface Entity {
  name: string;
}

const DataGrid: React.FC<DataGridProps> = ({ endpoint }) => {
  const [data, setData] = useState<Entity[]>([]);
  const [showNames, setShowNames] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://swapi.dev/api/${endpoint}/`);
      const json = await response.json();
      setData(json.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  const handleToggleNames = () => {
    setShowNames(!showNames);
  };

  return (
    <div className="data-grid">
      <h1 className="data-grid-title">Star Wars {endpoint}</h1>
      <button className="data-grid-button" onClick={handleToggleNames}>
        {showNames ? "Hide Names" : "Show Names"}
      </button>
      {loading ? (
        <div>loading...</div>
      ) : (
        <ul className={`data-grid-list ${!showNames ? "hidden" : ""}`}>
          {data.map((character) => (
            <li key={character.name} className="list-item">
              {character.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataGrid;
