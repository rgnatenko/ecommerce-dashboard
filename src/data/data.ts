import Region from '../types/Region';
import Section from '../types/Section';
import UserType from '../types/User';

const getUsers: () => UserType[] = () => {
  const reviews: UserType[] = [];
  const review: UserType = {
    name: 'Richard Dawkins',
    reason: 'Didnt pass validation test',
    status: 'blocked by system',
    time: 'just now'
  };

  for (let i = 0; i < 5; i++) {
    reviews.push(review);
  }

  return reviews;
};

const getRegions: () => Region[] = () => ([
  {
    countryName: 'India',
    users: 92896,
    transactions: 236,
    revenue: 7560,
    convRate: 14.01
  },
  {
    countryName: 'China',
    users: 50496,
    transactions: 54,
    revenue: 6532,
    convRate: 23.56
  },
  {
    countryName: 'USA',
    users: 45679,
    transactions: 35,
    revenue: 5432,
    convRate: 10.23
  },
  {
    countryName: 'South_Korea',
    users: 36453,
    transactions: 22,
    revenue: 4673,
    convRate: 8.85
  },
  {
    countryName: 'Vietnam',
    users: 15007,
    transactions: 17,
    revenue: 2456,
    convRate: 6.01
  }
]);

const reviewsTableTopSections: Section[] = [
  { title: 'user', className: 'user' },
  { title: 'reason', className: 'reason' },
  { title: 'status', className: 'status' },
  { title: 'time', className: 'time' },
];

const regionsTotalData = {
  totalUsersAmount: 377.620,
  totalTransactions: 236,
  totalRevenue: 15.758,
  totalConvRate: 10.32
};

const usersTotalSumSections: Section[] = [
  { title: String(regionsTotalData.totalUsersAmount), className: 'totalUsersAmount' },
  { title: String(regionsTotalData.totalTransactions), className: 'totalTransactions' },
  { title: String(regionsTotalData.totalRevenue), className: 'totalRevenue' },
  { title: String(regionsTotalData.totalConvRate), className: 'totalConvRate' },
];

const usersTableTopSections: Section[] = [
  { title: 'country', className: 'country' },
  { title: 'users', className: 'users' },
  { title: 'transactions', className: 'transactions' },
  { title: 'revenue', className: 'revenue' },
  { title: 'convRate', className: 'convRate' },
];

export const data = {
  getUsers,
  reviewsTableTopSections,
  regionsTotalData,
  usersTotalSumSections,
  usersTableTopSections,
  getRegions
};
