const Breadcrumb = ({name}:{name:string}) => (
  <section className="breadcrumb">
    <div className="container">
      <ul className="breadcrumb-list">
        <li>
          <a href="#">
            <i className="icon-home" />
          </a>
        </li>
    <li>{name}</li>
      </ul>
    </div>
  </section>
);

export default Breadcrumb;
