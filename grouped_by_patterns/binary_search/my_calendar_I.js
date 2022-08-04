/* You are implementing a program to use as your calendar. We can add a new event if adding the event will not cause a double booking.

A double booking happens when two events have some non-empty intersection (i.e., some moment is common to both events.).

The event can be represented as a pair of integers start and end that represents a booking on the half-open interval [start, end), the range of real numbers x such that start <= x < end.

Implement the MyCalendar class:

MyCalendar() Initializes the calendar object.
boolean book(int start, int end) Returns true if the event can be added to the calendar successfully without causing a double booking. Otherwise, return false and do not add the event to the calendar.
https://leetcode.com/problems/my-calendar-i/ */

//Solution 1
//Approach: Iterative
//Time: O(n^2) | Space: O(n) 
var MyCalendar = function() {
    this.bookings = [];
};

MyCalendar.prototype.book = function(start, end) {
    if (this.bookings.length === 0) {
        this.bookings.push([start, end]);
        return true;
    }
    for (const booking of this.bookings) {
        const [prevStart, prevEnd] = booking;
        if (Math.max(prevStart, start) < Math.min(prevEnd, end)) {
            return false;
        }
    }
    this.bookings.push([start, end])
    return true;
};

//Solution 2
//Approach: Binary Search
//Time: O(n^2) | Space: O(n) 
var MyCalendar = function() {
    this.bookings = [[0, 0], [10**9, 10**9]];
};

MyCalendar.prototype.book = function(start, end) {
    let left = 0, right = this.bookings.length -1;
    
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        const [midStart, midEnd] = this.bookings[mid];
        if (end === midStart) {
            left = mid;
            break;
        } else if (end > midStart) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    
    if (start < this.bookings[left - 1][1]) return false;
    this.bookings.splice(left, 0, [start, end]);
    return true;
};