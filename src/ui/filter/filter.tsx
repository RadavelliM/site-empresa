import styles from "./filter.module.css";

const filterList: string[] = [
  "Ombro",
  "Perna",
  "Biceps",
  "Triceps",
  "Panturrilha",
];

type FilterCardProps = {
  filter: string;
};

function FilterCard({ filter }: FilterCardProps) {
  return (
    <div className={styles.filterOptions}>
      <button> {filter} </button>
    </div>
  );
}

export default function Filter() {
  return (
    <div className={styles.filter}>
      <nav className={styles.filterNav}>
        {filterList.map((value, key) => (
          <FilterCard key={key} filter={value} />
        ))}
      </nav>
    </div>
  );
}
