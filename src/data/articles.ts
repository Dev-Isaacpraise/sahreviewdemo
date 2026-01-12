export type Article = {
  id: string
  title: string
  author: string
  affiliation: string
  pages: string
  category: 'current' | 'archive'
  pdf: string
  journalId: string
}

export const articles: Article[] = [
  // Current issue for JLLE - Real chapters
  { id: 'c1', title: 'The Representation of Nomadic Herdsmen Crises in Literature: Implications on the Environment', author: 'Chikere Onyechigoziri Austin', affiliation: '', pages: '1-31', category: 'current', pdf: '/assets/sample-current-1.pdf', journalId: 'jlle' },
  { id: 'c2', title: 'Imagination and Ethnic Politics in the Mass Media and Selected Poems About Nigeria\'s Middle Belt Region', author: 'Joseph Abuh', affiliation: '', pages: '32-61', category: 'current', pdf: '/assets/sample-current-2.pdf', journalId: 'jlle' },
  { id: 'c3', title: 'Black Characters and the Journey Motif in Daniel Black\'s "They Tell Me of a Home" and Breena Clarke\'s "River, Cross my Heart"', author: 'Valentine Chimenem Owhorodu', affiliation: '', pages: '62-81', category: 'current', pdf: '/assets/sample-current-3.pdf', journalId: 'jlle' },
  { id: 'c4', title: 'L\'adjectif Qualificatif En Francais Et En Igala: Une Analyse Morphosyntaxique', author: 'Ojojdumi Oliver Akoje', affiliation: '', pages: '118-135', category: 'current', pdf: '/assets/sample-current-4.pdf', journalId: 'jlle' },
  { id: 'c5', title: 'Dominant Language Ideology and the Plague of Ethnic Colonization in Nigeria', author: 'Eneojo Friday Ikani', affiliation: '', pages: '136-148', category: 'current', pdf: '/assets/sample-current-5.pdf', journalId: 'jlle' },
  { id: 'c6', title: 'Effects of Language as the Defining Parameter for the Majority/Minority Ethnic Groups in Nigeria: The Role of Hausa in Northern Nigeria', author: 'Unwaha C.O. and Omachonu C.G.', affiliation: '', pages: '149-169', category: 'current', pdf: '/assets/sample-current-6.pdf', journalId: 'jlle' },
  { id: 'c7', title: 'Simulation Based Early Warning System for Fulani Herders–Farmers Violent Conflict in the Middle Belt of Nigeria', author: 'Atabo Onuche Gideon', affiliation: '', pages: '170-188', category: 'current', pdf: '/assets/sample-current-7.pdf', journalId: 'jlle' },
  { id: 'c8', title: 'Book Review', author: 'Joseph Abuh', affiliation: '', pages: '189-195', category: 'current', pdf: '/assets/sample-current-8.pdf', journalId: 'jlle' },
  { id: 'c9', title: 'A Comparative Study of Igala and Yoruba Phonological Processes', author: 'Atadoga Francis Tijani', affiliation: '', pages: '196-217', category: 'current', pdf: '/assets/sample-current-9.pdf', journalId: 'jlle' },

  // Archive samples for JLLE (10)
  { id: 'a1', title: 'Historical Perspectives on Language Education', author: 'C. Historian', affiliation: 'Department of History, University of Ibadan', pages: '101-112', category: 'archive', pdf: '/assets/sample-archive-1.pdf', journalId: 'jlle' },
  { id: 'a2', title: 'Reflections on Literary Criticism', author: 'L. Critic', affiliation: 'Literature Studies Centre, Federal University', pages: '113-124', category: 'archive', pdf: '/assets/sample-archive-2.pdf', journalId: 'jlle' },
  { id: 'a3', title: 'Historical Language Landscapes', author: 'M. Philologist', affiliation: 'Linguistics Unit, University of Lagos', pages: '125-136', category: 'archive', pdf: '/assets/sample-archive-3.pdf', journalId: 'jlle' },
  { id: 'a4', title: 'The Role of Education in Society', author: 'N. Analyst', affiliation: 'Education Policy Institute, University of Nigeria', pages: '137-148', category: 'archive', pdf: '/assets/sample-archive-4.pdf', journalId: 'jlle' },
  { id: 'a5', title: 'Language and Memory', author: 'O. Cultural', affiliation: 'Centre for Cultural Studies, Ahmadu Bello University', pages: '149-160', category: 'archive', pdf: '/assets/sample-archive-5.pdf', journalId: 'jlle' },
  { id: 'a6', title: 'Literary Theory and Practice', author: 'P. Theorist', affiliation: 'Literature Lab, University of Ibadan', pages: '161-172', category: 'archive', pdf: '/assets/sample-archive-6.pdf', journalId: 'jlle' },
  { id: 'a7', title: 'Language Rights and Social Change', author: 'Q. Jurist', affiliation: 'Faculty of Law, University of Abuja', pages: '173-184', category: 'archive', pdf: '/assets/sample-archive-7.pdf', journalId: 'jlle' },
  { id: 'a8', title: 'Early Childhood Language Education', author: 'R. Educator', affiliation: 'School of Education, University of Benin', pages: '185-196', category: 'archive', pdf: '/assets/sample-archive-8.pdf', journalId: 'jlle' },
  { id: 'a9', title: 'Language Ecology Research', author: 'S. Ecologist', affiliation: 'Linguistics Research Centre, University of Port Harcourt', pages: '197-208', category: 'archive', pdf: '/assets/sample-archive-9.pdf', journalId: 'jlle' },
  { id: 'a10', title: 'Historical Linguistics Review', author: 'T. Philologist', affiliation: 'Institute of Linguistic Studies, University of Ibadan', pages: '209-220', category: 'archive', pdf: '/assets/sample-archive-10.pdf', journalId: 'jlle' }
]

