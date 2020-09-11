import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
// import { profileReducer, editProfileReducer } from '../features/profile/reducers/profile-reducer';
// import { loginReducer, signupReducer } from '../features/auth/reducers/auth-reducer';
import { signupReducer } from '../features/auth/reducers/auth-reducers';
// import { certificatesReducer, verifyCertificateReducer } from '../features/certificates/reducers/certificates-reducer';
// import addCertificateReducer from '../features/add-certificate/reducers/add-certificate-reducer';
// import photoUploadReducer from '../features/photo-upload/reducers/photo-upload-reducer';
// import searchUsersReducer from '../features/search-users/reducers/search-users-reducer';
// import sendCrewingAgencyReducer 
// from '../features/send-certificate-crewing-agency/reducers/send-cag-reducer';
// import sendMarinaReducer 
// from '../features/send-certificate-marina/reducers/send-marina-reducer';
// import sendCertificatesVerify 
// from '../features/send-certificate-verify/reducers/send-certificate-verify-reducer';
// import { certificateOfProficiencyMarinaReducer, certificateOfProficiencyReducer } 
// from '../features/certificate-of-proficiency/reducers/certificate-of-proficiency-reducer';
// import transactionsReducer from '../features/transactions/reducers/transactions-reducer';

//todo rename crewAgencyVerification 
export default function configureStore() {
	const initialState = {};
	const middleware = applyMiddleware(ReduxThunk, logger);
	const reducers = combineReducers({
		// login: loginReducer,
		// certificates: certificatesReducer,
		// profile: profileReducer,
		// editProfile: editProfileReducer,
		// createCertificate: addCertificateReducer,
		// photoUpload: photoUploadReducer,
		// searchedUsers: searchUsersReducer,
		// crewAgencyVerification: sendCrewingAgencyReducer,
		// checkIsCertificateVerified: sendCertificatesVerify,
		// sendCertificateMarina: sendMarinaReducer,
		// certificateOfProficiency: certificateOfProficiencyReducer,
		// marinaData: certificateOfProficiencyMarinaReducer,
		signup: signupReducer,
		// verifyCertificate: verifyCertificateReducer,
		// transactions: transactionsReducer
	});

	return createStore(reducers, initialState, middleware);
}
