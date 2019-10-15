
import {
    faTrash,
    faSignOutAlt,
    faEdit,
    faSpinner,
    faFileUpload,
    faPhoneSquare,
    faEnvelopeSquare,
    faEnvelope,
    faMapMarkedAlt,
    faPhone,
    faLock
} from "@fortawesome/free-solid-svg-icons";

import {
    faFacebookSquare,
    faLinkedin,
    faGithubSquare
} from "@fortawesome/free-brands-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
    return library.add(
        faTrash,
        faSignOutAlt,
        faEdit,
        faSpinner,
        faFileUpload,
        // faPhoneSquare,
        // faEnvelopeSquare,
        // faFacebookSquare,
        // faLinkedin,
        // faGithubSquare,
        faEnvelope,
        faMapMarkedAlt,
        faPhone,
        faLock
    );
}

export default Icons;