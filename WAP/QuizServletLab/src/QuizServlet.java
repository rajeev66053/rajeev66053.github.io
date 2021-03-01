import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class QuizServlet extends HttpServlet {
	
	private static String[] questions = {
			"3","1","4","1","5", //PI
			"1","1","2","3","5",//fibonacci
			"1","4","9","16","25", //squares
			"2","3","5","7","11", //primes
			"1","2","4","8","16" //power of 2
	};
	
	private static int[] answers= {9,8,36,13,32};
	
	private static int score=0;

	private static int sequence_from=0;

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
    		throws ServletException, IOException {
		
		PrintWriter out = response.getWriter();
		
		out.print("<html><head><title>Quiz Servlet</title></head><body>");
		out.println("<div style='border:1px solid blue;"
				+ " margin: auto;"
				+ " width: 400px;"
				+ "box-sizing: border-box;"
				+ "padding: 50px;'>");
		out.print("<h1>The Number Quiz</h1>");

		out.print("<p>Your current score is "+score +"</p>");
		
		if(sequence_from <=20) {
			out.println("<p>Guess the next number in the sequence</p>");
			String sep = "";
			for(int i=sequence_from ; i<sequence_from+5; i++) {
				out.println(sep);
				out.println(questions[i]);
				sep = ",";
			}
		
			out.println("<br>");

			out.print("<form method='post'>");
			out.print("Your Answer : <input type='text' name='num' value=''/><br>");
			out.print("<input type='submit' value='Submit'/>");		
			out.print("</form>");
		}else {
			out.println("You have completed the Number Quiz with a score of "+score+" out of 5. ");
		}
		out.println("</div>");
		out.print("</body></html>");
    	
    	
    }
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
    		throws ServletException, IOException {
    	
	    		int num = Integer.parseInt(request.getParameter("num"));
	    		
	    		int index=0;
	    		if(sequence_from!=0) {

		    		index=sequence_from/5;
	    		}
	    		
	    		if(num==answers[index]) {
	    			score+=1;
	    		}
	    		sequence_from+=5;
	    		
	    		doGet(request, response); // call doGet()
    	
	}


}
