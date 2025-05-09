const FilterController = ({ setSelectedCategory }) => {
  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="basis-full lg:basis-[700px]">
      <ul className="filter-controllers flex flex-wrap sm:flex-nowrap justify-start lg:justify-end button-group filters-button-group" data-aos="fade-up">
        <li>
          <button onClick={() => handleClick("all")} 
                      className="pr-5 md:pr-10 lg:pr-17px 2xl:pr-10 text-contentColor font-medium hover:text-primaryColor dark:text-contentColor-dark dark:hover:text-primaryColor">
            See All
          </button>
        </li>
        <li>
          <button onClick={() => handleClick("data science")} 
                      className="pr-5 md:pr-10 lg:pr-17px 2xl:pr-10 text-contentColor font-medium hover:text-primaryColor dark:text-contentColor-dark dark:hover:text-primaryColor">
            Data Science
          </button>
        </li>
        <li>
          <button onClick={() => handleClick("engineering")} 
                      className="pr-5 md:pr-10 lg:pr-17px 2xl:pr-10 text-contentColor font-medium hover:text-primaryColor dark:text-contentColor-dark dark:hover:text-primaryColor">
            Engineering
          </button>
        </li>
        <li>
          <button onClick={() => handleClick("featured")} 
                      className="pr-5 md:pr-10 lg:pr-17px 2xl:pr-10 text-contentColor font-medium hover:text-primaryColor dark:text-contentColor-dark dark:hover:text-primaryColor">
            Featured
          </button>
        </li>
        <li>
          <button onClick={() => handleClick("architecture")} 
                      className="pr-5 md:pr-10 lg:pr-17px 2xl:pr-10 text-contentColor font-medium hover:text-primaryColor dark:text-contentColor-dark dark:hover:text-primaryColor">
            Architecture
          </button>
        </li>
      </ul>
    </div>
  );
};

export default FilterController;
