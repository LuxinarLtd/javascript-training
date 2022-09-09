/* Create a form to fill in name, gender (drop down), age and country (drop down). 
When clicking on the submit button it will hide the form and display the data that has been submitted. 
Also display a message to inform the user that the form has been submitted. */

// create countries dropdown
const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antigua & Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia',
  'Bosnia & Herzegovina',
  'Botswana',
  'Brazil',
  'British Virgin Islands',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Cayman Islands',
  'Chad',
  'Chile',
  'China',
  'Colombia',
  'Congo',
  'Cook Islands',
  'Costa Rica',
  'Cote D Ivoire',
  'Croatia',
  'Cruise Ship',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Estonia',
  'Ethiopia',
  'Falkland Islands',
  'Faroe Islands',
  'Fiji',
  'Finland',
  'France',
  'French Polynesia',
  'French West Indies',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guam',
  'Guatemala',
  'Guernsey',
  'Guinea',
  'Guinea Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Isle of Man',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jersey',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kuwait',
  'Kyrgyz Republic',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macau',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Namibia',
  'Nepal',
  'Netherlands',
  'Netherlands Antilles',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palestine',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'Reunion',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Pierre & Miquelon',
  'Samoa',
  'San Marino',
  'Satellite',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'South Africa',
  'South Korea',
  'Spain',
  'Sri Lanka',
  'St Kitts & Nevis',
  'St Lucia',
  'St Vincent',
  'St. Lucia',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  "Timor L'Este",
  'Togo',
  'Tonga',
  'Trinidad & Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Turks & Caicos',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'UK',
  'USA',
  'Uruguay',
  'Uzbekistan',
  'Venezuela',
  'Vietnam',
  'Virgin Islands (US)',
  'Yemen',
  'Zambia',
  'Zimbabwe',
];
const countryElement = document.getElementById('country');

for (let country of countries) {
  const newOption = document.createElement('option');
  newOption.textContent = country;
  newOption.value = country.toLowerCase().replaceAll(' ', '-');

  countryElement.appendChild(newOption);
}

// create genders dropdown
const genders = [
  'Female',
  'Male',
  'Non-Binary',
  'Other'
];
const genderElement = document.getElementById('gender');

for (let gender of genders) {
  const newOption = document.createElement('option');
  newOption.textContent = gender;
  genderElement.appendChild(newOption);
}

const container = document.getElementById('container');
const form = document.getElementById('form');

// submit form
form.addEventListener('submit', (e) => {
  form.style.display = 'none';

  // display input data
  // input name value
  const nameInput = document.getElementById('name').value;
  const submittedName = document.createElement('h2');

  submittedName.textContent = `Name: ${nameInput}`;
  container.appendChild(submittedName);

  // input gender value
  const genderInput = document.getElementById('gender').value;
  const submittedGender = document.createElement('h2');

  submittedGender.textContent = `Gender: ${genderInput}`;
  container.appendChild(submittedGender);

  // input age value
  const ageInput = document.getElementById('age').value;
  const submittedAge = document.createElement('h2');

  submittedAge.textContent = `Age: ${ageInput}`;
  container.appendChild(submittedAge);

  // input country value
  const countryInput = document.getElementById('country').value;
  const submittedCountry = document.createElement('h2');

  submittedCountry.textContent = `Country: ${countryInput}`;
  container.appendChild(submittedCountry);

  // display message
  const message = document.createElement('h1');

  message.textContent = 'The form has been submitted';
  container.appendChild(message);

  e.preventDefault();
});
