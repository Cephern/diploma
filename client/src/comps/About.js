import { useState, useEffect } from "react";

import Nav from "./Nav";
import Footer from "./Footer";
import Review from "./Review";

const About = () => {
  const [reviews, setReviews] = useState("");

  useEffect(() => {
    const abortCont = new AbortController();

    fetch("http://localhost:5000/api/reviews", { signal: abortCont.signal })
      .then((x) => x.json())
      .then((reviews) => setReviews(reviews))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="about">
      <Nav />
      <main>
        <h2>О Сервисе</h2>

        <div className="description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            quod distinctio, aliquam libero sed necessitatibus. Laudantium
            facilis laborum ratione cumque cum ducimus ad voluptatibus est,
            necessitatibus culpa aspernatur. Commodi enim dolorum eum officiis?
            Quod enim quidem natus, ut numquam maiores, voluptate debitis
            dignissimos voluptatum hic, quibusdam repellat corrupti delectus
            tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Autem, ipsam. At eaque exercitationem quae ad nobis pariatur
            architecto. Possimus ratione a repellat quae impedit expedita! Error
            dolores, similique et sint autem nemo minus fuga culpa sapiente.
            Deleniti magnam sed commodi aperiam numquam, laudantium, id
            repudiandae, accusantium eligendi blanditiis quo non. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Vero quibusdam deleniti
            ipsum officiis officia et culpa consectetur, atque recusandae. Ipsum
            nobis consectetur voluptatem temporibus cum aspernatur, eos
            molestias, repellendus provident quo magnam incidunt dignissimos
            illo dolor praesentium eligendi culpa expedita consequatur dolorem
            eaque beatae sint? Eius officiis labore illo consequuntur.
          </p>
        </div>

        <div className="reviews">
          <h3>Отзывы</h3>

          <div className="reviews-inner">
            {reviews ? (
              reviews.map((review) => (
                <Review review={review} key={review._id} />
              ))
            ) : (
              <div>Пока что тут пусто...</div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
