URL shortening systems serve a dual purpose: enhancing visual appeal with shorter, more manageable links and optimizing memory and storage space. These systems operate on the premise that users create concise aliases for lengthy URLs, redirecting them to the original, longer links.

Various strategies exist for generating these abbreviated links, with hashing being a primary consideration. Hashing involves selecting an algorithm to transform the original URL into a unique, condensed representation. This condensed form, often referred to as a "hash," is then used as the identifier for the shortened URL.

Choosing the appropriate hashing algorithm is crucial, as it directly impacts the efficiency and security of the URL shortening process. Factors such as collision resistance, cryptographic strength, and speed are all considerations when evaluating hashing algorithms.

Beyond hashing, additional techniques can be employed to further optimize URL shortening systems. These may include incorporating custom aliases, employing compression methods, or implementing caching mechanisms to improve performance.

Ultimately, the goal of URL shortening systems is to streamline web navigation and conserve resources, offering users a more convenient and efficient means of accessing online content.

Advanced features:

1. Complex Link Analytics where we can see more details about users and his redirections
2. Expiration Dates of links
3. Subdomains of links
4. Password protections for links

SHORT-URL

Short Url is a project that is dockerized.
There are 4 containers:

1. Client (localhost:3000)
2. Server (localhost:8000)
3. Mongo (localhost:27017)
4. MongoViewer (localhost:8081) -> UI for Mongo DB

You will need to have Docker installed.
In root of project just 'docker-compose up'
