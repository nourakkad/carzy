import { ServiceDetail } from "../../components";
import { getServiceBySlug, servicesCatalog } from "../../constants";

export async function getStaticPaths() {
  return {
    paths: servicesCatalog.map((service) => ({
      params: { slug: service.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return { notFound: true };
  }

  return {
    props: {
      slug: service.slug,
    },
  };
}

const ServicePage = ({ slug }) => {
  const service = getServiceBySlug(slug);

  if (!service) {
    return null;
  }

  return <ServiceDetail key={slug} service={service} />;
};

export default ServicePage;
