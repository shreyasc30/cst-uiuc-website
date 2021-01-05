import React from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import Footer from '../../Components/Footer/Footer';

function About() {
    const date = new Date();
    const years = date.getMonth() >= 9 ? date.getFullYear() - 1999 :date.getFullYear() - 1999 - 1;

    return (
        <>
            <Navigation />
            <div className="About">
                <div className="container">
                    <h1>About Us</h1>
                    <p>doin this ish for {years} years dude!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sed. Dignissimos maxime tenetur cupiditate nisi odio. Magnam eius, dicta perspiciatis voluptatem voluptate earum ex enim. Doloremque error officia, libero accusamus vel minima laborum debitis quisquam cumque perspiciatis incidunt obcaecati similique mollitia sapiente maxime ducimus consequuntur quos porro necessitatibus qui sit, alias amet dolore! Quis, beatae in quisquam voluptas pariatur rem dolor quia deleniti repudiandae fugit eum expedita sapiente. Optio necessitatibus eligendi recusandae eveniet? Praesentium dolorum reiciendis ratione veniam aut odio nam recusandae vero adipisci assumenda rerum quasi, quas expedita doloribus porro totam! Maiores assumenda magni ea ullam odit quidem. Quasi ea exercitationem repellat vitae eaque aliquid pariatur magnam dolor, praesentium eos facere ipsam nihil, rerum architecto sed nostrum sunt cum neque voluptas! Fugiat delectus amet cupiditate et dolorum saepe consequuntur quisquam? Enim, voluptatum consequuntur accusantium explicabo praesentium quaerat itaque eveniet iste dignissimos magni vero blanditiis maiores veritatis eos distinctio aut voluptates, tempora nemo repudiandae delectus beatae cum corporis impedit. Aliquid sequi inventore dolor autem a aut. Minima similique ex asperiores quod quo accusantium cumque ratione nostrum voluptatibus modi, voluptatem sunt beatae dignissimos provident illum deserunt ut distinctio amet delectus explicabo a laudantium. Aliquam, eaque explicabo aliquid asperiores nemo molestias. Dignissimos doloribus rem possimus laborum, quo nemo minus aliquam minima error ullam! Ut quas commodi voluptatibus earum totam tempora officiis optio, necessitatibus a corrupti quaerat dolorum quibusdam aut, perspiciatis harum? Cupiditate, repellat. Distinctio unde quod possimus assumenda vel, deleniti laudantium hic. Rem quam magni doloribus vitae dolor! Vero explicabo quaerat corrupti unde est tenetur neque asperiores atque totam incidunt praesentium eveniet fugiat tempora porro, ipsa iste, accusantium laudantium voluptatem, culpa ullam? Nostrum praesentium quia ratione necessitatibus architecto sequi consequuntur tempora error aliquid dolorum adipisci, ut, soluta totam commodi consequatur porro ab nemo! Neque nihil, eius sequi ullam, consequatur excepturi, dolorum nostrum minus quibusdam suscipit sunt sint a aperiam. Soluta a amet aperiam incidunt ea perspiciatis excepturi accusantium rem praesentium, exercitationem voluptatibus repudiandae unde dolores sapiente animi officia officiis nulla quae totam voluptatum fugiat. Eum natus dolore, delectus corrupti, ad reprehenderit ipsa ullam optio, assumenda itaque quam voluptates harum tempora sapiente repellendus ratione! Velit atque magni reprehenderit cum consectetur, ipsa necessitatibus vero, at, blanditiis consequatur veniam voluptas eligendi provident tenetur! Obcaecati doloremque cum, blanditiis odit hic, magni corrupti, eum sapiente aspernatur voluptas a facere pariatur autem eius. Nulla, voluptas sed, debitis, eum vero sapiente veritatis sint dolor reprehenderit cum tenetur incidunt porro. Eligendi quasi vel sequi nam illum facilis impedit corporis debitis eveniet aliquid quos, quidem qui nisi ab laudantium corrupti sit? Illum iure ab placeat perferendis praesentium ratione velit aliquid blanditiis accusantium, ad veritatis odio et corporis incidunt non! Ipsa esse a necessitatibus officiis ab veritatis inventore eos voluptas, incidunt quibusdam enim pariatur, doloribus alias commodi quod! Autem saepe ipsum impedit, omnis neque ad dolor ullam molestias harum facilis repudiandae? Esse rem est, quisquam inventore vel officia molestiae repudiandae debitis eligendi, cumque molestias delectus perspiciatis magnam, maxime quia beatae praesentium aperiam! Tempora praesentium adipisci sed! Sapiente similique consequatur voluptatibus voluptas eveniet!</p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;
