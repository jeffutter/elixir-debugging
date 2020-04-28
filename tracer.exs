defmodule Tracer do
  def start do
    spawn(&loop/0)
  end

  defp loop do
    receive do
      msg ->
        IO.inspect(msg)
        loop()
    end
  end
end
