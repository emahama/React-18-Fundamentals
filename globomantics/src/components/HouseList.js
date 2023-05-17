import HouseRow, { HouseRowMem } from "./HouseRow";
import loadingStatus from "./helpers/loadingStatus";
import useHouse from "./hooks/useHouses";
import LoadingIndicator from "./loadingIndicator";

const HouseList = ({ selectHouse }) => {
  const { houses, setHouses, loadingState } = useHouse();
  if (loadingState !== loadingStatus.loaded) {
    return <LoadingIndicator loadingStatus={loadingState} />;
  }
  const addHouse = () => {
    const house = {
      id: 7,
      address: "32 Charlotte, Accra",
      country: "Ghana",
      price: 350000,
    };
    setHouses((houses) => [...houses, house]);
  };
  return (
    <>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          House currently on the market
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Address</th>
            <th>Country</th>
            <th>Asking Price</th>
          </tr>
        </thead>
        <tbody>
          {houses.map((h) => (
            <HouseRow key={h.id} house={h} selectHouse={selectHouse} />
            // <HouseRowMem key={h.id} house={h} />
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={addHouse}>
        Add
      </button>
    </>
  );
};

export default HouseList;
